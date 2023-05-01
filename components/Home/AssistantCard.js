<<<<<<< HEAD
import Image from "next/image";
=======
import Image from "next/legacy/image";
>>>>>>> 274f330d77714ea6bb60f9ba0f9e108a1d5d2b09

export default function AssistantCard({ photo, name, code, position, major }) {
  return (
    <div className="flex items-center">
      <Image src={photo} width={72} height={72} className="rounded-full" />

      <div className="ml-2">
        <p className="font-bold">
          {name} ({code})
        </p>
        <p className="text-sm italic text-blue-400">{position}</p>
        <p className="text-sm font-light text-gray-500">{major}</p>
      </div>
    </div>
  );
}
