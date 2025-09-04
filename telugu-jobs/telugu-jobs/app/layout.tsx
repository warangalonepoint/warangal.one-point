export const metadata = { title: 'Telugu Jobs – AP & Telangana', description: 'Find jobs across AP & Telangana' };
export default function RootLayout({ children }) {
  return (<html lang="en"><body><div className="container"><header><h1>Telugu Jobs</h1></header>{children}</div></body></html>);
}