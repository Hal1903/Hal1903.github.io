export default function Quote({children}) {
    return (
        <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>   
        <p className='quote'>
            {children}
        </p>
        </div>
    );
}