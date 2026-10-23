"use client";

import { usePathname, useRouter } from "next/navigation";

function Profile() {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Profile Component - client</h1>
      <button onClick={handleNavigate}>Navigate to home page</button>
    </div>
  );
}

export default Profile;
