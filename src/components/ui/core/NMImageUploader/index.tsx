import { useState } from "react";
import { Input } from "../../input";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TImageUploader = {
  label?: string;
  className?: string;
  setImagesFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setImagePreview: React.Dispatch<React.SetStateAction<string[]>>;
};

const NMImageUploader = ({
  label = "Upload Images",
  className,
  setImagesFiles,
  setImagePreview,
}: TImageUploader) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImagesFiles((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = "";
  };
  return (
    <>
      <div className={cn("flex flex-col items-center w-full gap-4", className)}>
        <Input
          onChange={handleImageChange}
          id="image-upload"
          type="file"
          multiple
          accept="image/*"
          className="hidden"
        />

        <label
          htmlFor="image-upload"
          className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default NMImageUploader;
