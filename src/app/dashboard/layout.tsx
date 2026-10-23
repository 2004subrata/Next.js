// this layout only applies to /dashboard/*

import Link from "next/link";

const CommonAdminDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className="flex">
        <aside className="w-64 p-4 border-r">
          <h2>Dashboad</h2>
          <nav>
            <ul>
              <li>
                <Link href={"/dashboard"}>Dashboard Home</Link>
              </li>
              <li>
                <Link href={"/dashboard/analytics"}>Dashboard analytics</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="flex-1 p-5">{children}</div>
      </div>
    </div>
  );
};

export default CommonAdminDashboardLayout;
