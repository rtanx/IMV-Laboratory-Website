<<<<<<< HEAD
import Image from "next/image";
=======
import Image from "next/legacy/image";
>>>>>>> 274f330d77714ea6bb60f9ba0f9e108a1d5d2b09

const Loading = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-white">
      <Image src="/logo.webp" width={64} height={64} objectFit="contain" alt="Loading..." className="animate-pulse" />
    </div>
  );
};

export default Loading;
