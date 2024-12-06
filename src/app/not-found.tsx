import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <div className="text-center text-3xl font-semibold">
          This Page is not avaiable !!
        </div>
        <div className="text-center text-base">
          <span> Go back - </span>
          <Link href="/" className="text-blue-700 hover:underline">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
