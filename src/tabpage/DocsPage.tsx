import DocsCard from "@/components/card/docs_card";

const DocsPage = () => {
  const files = [
    { fileName: "presentation.ppt", savedDate: "27 May 2020" },
    { fileName: "spreadsheet.csv", savedDate: "24 May 2020" },
    { fileName: "report.pdf", savedDate: "27 May 2020" },
    { fileName: "report.doc", savedDate: "27 May 2020" },
    { fileName: "spreadsheet.csv", savedDate: "24 May 2020" },
    { fileName: "presentation.ppt", savedDate: "27 May 2020" },
    { fileName: "report.doc", savedDate: "27 May 2020" },
    { fileName: "report.pdf", savedDate: "27 May 2020" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {files.map((file, index) => (
      <DocsCard
        key={index}
        fileName={file.fileName}
        savedDate={file.savedDate}
      />
    ))}
  </div>
  
  );
};

export default DocsPage;
