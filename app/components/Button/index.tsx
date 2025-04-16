
import './styles.sass';

export default function Button({ data }: any) {
  const { title, type, metadata: { url, action, color, sin_borde } } = data;
  return (<>
    {
      url ? (
        <a className={`${sin_borde ? ` text-white`: 'bg-transparent border'} flex flex-1 rounded-md py-2 justify-center`} 
        style={sin_borde ? { backgroundColor: color } : {backgroundColor: '#ffffff', borderColor: color}} href={url}>{title}</a>
      ) : (
        <button onClick={() => action()} className='w-full' >
          {title}
        </button>
      )
    }
  </>);
}