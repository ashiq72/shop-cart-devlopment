import { useState } from "react";
import { Input } from "../../input";

const NMImageUploader = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);

    const file = e.target.files![0];
    setImageFiles((prev) => [...prev, file]);
  };
  return (
    <div className="relative w-36 h-36 rounded-md overflow-hidden border border-dashed border-gray-300">
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        id="image-uploader"
        className="object-cover w-full h-full"
      />
      <label
        className="bg-red-300 hover:bg-red-400 absolute -top-0 -right-0 w-6 h-6 p-0 rounded-full"
        htmlFor="image-uploader"
      >
        Upload logo
      </label>
    </div>
  );
};

export default NMImageUploader;
