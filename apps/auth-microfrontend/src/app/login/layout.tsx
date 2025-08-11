type LoginLayoutProps = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="flex justify-center items-center h-screen p-4 w-full">
      {children}
    </div>
  );
}