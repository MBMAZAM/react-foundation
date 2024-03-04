
export const BasicTypes = () => {

  const name:string = 'mauricio';
  const age:number = 23;
  const isActive:boolean = true;

  //const powers = [];//No sabe el tipo de dato
  const powers:string[] = ['React', 'React Native', 'Angular', 'Vue']; //Any, puede entrar todos los datos
  powers.push('Qwik');



  return (
    <>
      <h3>Tipos básicos</h3>

      {name} {age} {isActive ? 'true': 'false'}

      <br />

      {powers.join(' - ')}


    </>
  )
}

