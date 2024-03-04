

export const BasicFunctions = () => {

  const addTwoNumber = ( a:number, b:number ) =>  {
    return (a + b).toString();
  }


  return (
    <>
        <h3>Functions</h3>
        <span>El resultado de sumar: { addTwoNumber(5,8) } </span>
    </>
  )
}
