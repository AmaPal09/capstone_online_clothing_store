const App =() =>  {
    const categories = [
        {
            id: 1,
            title: "Hats",
        }
    ];

    return(
        <div className="categories-container">
            {categories.map((categories) => {
                return (
                    <div className="category-container">
                    { /* <img/> */}
                        <div className="category-body-container">
                            <h2>{categories.title}</h2>
                            <p>Shop now</p>
                        </div>
                    </div>
                );

            })}

        </div>

    );
}

export default App;
