
import './styles.sass';

export default function Button({ data }: any) {
  const { title, type, metadata: { url, action, color, sin_borde } } = data;
  return (<>
    {
      url ? (
        <a style={type === 'botones-primarios' ? { color, border: sin_borde ? '' : `2px solid ${color}` } : { color }} className={type === 'botones-primarios' ? 'primary' : 'secondary'} href={url}>{title}</a>
      ) : (
        <button onClick={() => action()} className={type === 'botones-primarios' ? 'primary' : 'secondary'} >
          {title}
        </button>
      )
    }
  </>);
}