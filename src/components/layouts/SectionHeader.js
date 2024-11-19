export default function SectionHeaders({ subHeader, mainHeader}) {
  return (
    <div >
      <h3 className="capitalize text-primary font-semibold text-3xl">
        {subHeader}
      </h3>
      <h2 className="text-base text-gray-600 font-normal italic mt-2 md:text-sm lg:text-lg">
        {mainHeader}
      </h2>
    </div>
  );
}
