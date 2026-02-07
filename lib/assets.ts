import fs from 'fs';
import path from 'path';

// Define paths
const photographyDir = path.join(process.cwd(), 'public/images/photography');
const videosDir = path.join(process.cwd(), 'public/images/videos');
const videosDataPath = path.join(process.cwd(), 'data/videos.json');
const photosDataPath = path.join(process.cwd(), 'data/photography.json');

export interface PhotoAsset {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface VideoAsset {
  id: string;
  title: string;
  cover: string;
  link: string;
}

export function getPhotography(): PhotoAsset[] {
  // Ensure directory exists
  if (!fs.existsSync(photographyDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(photographyDir);
  
  // Read photo captions if available
  let photosData: Record<string, string> = {};
  if (fs.existsSync(photosDataPath)) {
    const rawData = JSON.parse(fs.readFileSync(photosDataPath, 'utf8'));
    // Convert array to map for faster lookup: { "photo1": "Caption", ... }
    photosData = rawData.reduce((acc: Record<string, string>, item: { id: string, caption: string }) => {
      acc[item.id] = item.caption;
      return acc;
    }, {});
  }
  
  const photos = fileNames
    .filter(fileName => /\.(jpg|jpeg|png|webp)$/i.test(fileName)) // Filter image files
    .map(fileName => {
      const id = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '');
      const caption = photosData[id]; // Undefined if not in JSON
      const alt = caption || id.charAt(0).toUpperCase() + id.slice(1); // Fallback to Capitalized filename for alt text
      
      return {
        id,
        src: `/images/photography/${fileName}`,
        alt,
        caption
      };
    });

  // Sort by filename descending (assuming numbered like photo4, photo3...)
  // This will put photo4.jpg before photo1.jpg
  return photos.sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true }));
}

export function getVideos(): VideoAsset[] {
  // Ensure directory and data file exist
  if (!fs.existsSync(videosDir) || !fs.existsSync(videosDataPath)) {
    return [];
  }

  // Read video metadata
  const videosData = JSON.parse(fs.readFileSync(videosDataPath, 'utf8')) as Omit<VideoAsset, 'cover'>[];
  
  // Get video covers
  const fileNames = fs.readdirSync(videosDir);
  
  // Map covers to data
  const videos = videosData.map(video => {
    // Find matching cover image (e.g., video4.jpg for id "video4")
    const coverFile = fileNames.find(fileName => fileName.startsWith(video.id));
    
    return {
      ...video,
      cover: coverFile ? `/images/videos/${coverFile}` : '', // Fallback if no cover found
    };
  });

  // Sort by ID descending (video4, video3...) if not already sorted in JSON
  return videos.sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true }));
}
