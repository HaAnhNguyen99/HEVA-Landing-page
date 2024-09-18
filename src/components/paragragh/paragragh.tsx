const Paragragh = ({ bottom }: { bottom: string }) => {
  console.log(bottom);
  return (
    <>
      <div className={`paragraph absolute bottom-${bottom}  overflow-auto`}>
        <div className="text-container marquee font-Editorial">
          Take a walk on the
          <em>wellness side</em>
        </div>
        <div className="text-container ml-20 marquee font-Editorial">
          Take a walk on the
          <em>wellness side</em>
        </div>
      </div>
    </>
  );
};

export default Paragragh;
