<!------------------------------------------------------------------------------------------------------------------------------>Rendering List and Conditional Content

Content:
- Outputting Dynamic List of content
- Rendering content under certain conditions

✅ ———————————————— Rendering List of data ————————————————
    const DATA = [
        {title: 'id: 01, Car Insurance 1', amount: 294, date: new Date(2021,2,28)},
        {title: 'id: 02, Car Insurance 2', amount: 333, date: new Date(2021,2,28)},
        {title: 'id: 03, Car Insurance 3', amount: 852, date: new Date(2021,2,28)},
        {title: 'id: 04, Car Insurance 4', amount: 988, date: new Date(2021,2,28)}
    ];
function App() {
    const [expenses, setExpenses] = useState(DATA)
    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense,...prevExpenses]
        })
    };
        return (
            <div>
                <ExpensesFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}/>
                {
                    props.items.map((item,index) =>
                        <ExpenseItem  key={index or item.id} title={item.title} amount={item.amount} date={item.date}/> 
                    )
                }
            </div>
        )
    }


✅ ———————————————— Rendering conditional content ————————————————

let expensesContent = <p>No Expenses Found</p>

if (filteredExpenses.length > 0) {          <!--This is the second way to have conditional content-->
    expensesContent = filteredExpenses.map((expense) => 
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}   
                    />
                )
}

return (
    <Card>
        <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangedHandler}
        />
        {filteredExpenses.length === 0 && expensesContent}     <!--This is the first way (&& returns the value if the condition is ok)-->
        {
            filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => 
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}   
                    />
                )
            )
        }
    </Card>
)
