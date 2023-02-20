
function Card({ cardTheme, data }) {

    return (
        <div className='card' style={{ backgroundColor: cardTheme.color, display: data.length > 0 ? 'block' : 'none' }}>
            {
                data.map(item => (
                    <div key={item.id}> * {item.note}</div>
                ))
            }
        </div>
    )
}

export default Card