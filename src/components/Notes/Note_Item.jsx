
const Note_Item = ({item,color}) => {
  return (
    <section>
    

    <h2
      className={`w-full text-start h-10 shadow-md border truncate ... px-2 py-3 my-2 ${color}`}
    >
      {item}
    </h2>
    </section>
  );
};

export default Note_Item;
