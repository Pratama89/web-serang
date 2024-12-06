export default function Footer() {
  // Mendapatkan tahun saat ini
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex md:flex-row xs:flex-col justify-center bg-primary text-slate-300 text-sm xs:text-sm p-6 text-center dark:bg-neutral-700">
      <span>© {currentYear} Copyright: CV. Mutiara Elasticindo</span>
      {/* <span>Website Designed by : MasCipto</span> */}
    </div>
  );
}
