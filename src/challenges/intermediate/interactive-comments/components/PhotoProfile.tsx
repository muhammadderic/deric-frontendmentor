interface PhotoProfileProps {
  username: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function PhotoProfile({ username, imageUrl, imageAlt }: PhotoProfileProps) {
  // If imageUrl is provided, show the image
  if (imageUrl) {
    return (
      <div className="h-[30px] w-[30px] rounded-full overflow-hidden border-2 border-[hsl(238,40%,52%)]">
        <img
          src={imageUrl}
          alt={imageAlt || `${username}'s avatar`}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Fallback to initials if no image is provided
  const initial = username.charAt(0).toUpperCase();

  return (
    <div className="h-[30px] w-[30px] flex items-center justify-center bg-[hsl(358,79%,66%)] text-white border-2 border-[hsl(238,40%,52%)] rounded-full">
      <p className="text-[0.5rem] font-bold">{initial}</p>
    </div>
  );
}