import CustomLayout from "@/components/CustomLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CustomLayout>
      {children}
    </CustomLayout>
  );
}
