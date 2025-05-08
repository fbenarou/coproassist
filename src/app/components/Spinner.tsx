"use client";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-32">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600 border-opacity-70"></div>
    </div>
  );
}
