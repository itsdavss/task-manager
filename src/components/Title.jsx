function Title(props) {
  return (
    <h1 className="text-3xl text-slate-100 text-center font-bold">
      {props.children}
    </h1>
  );
}

export default Title;
