document.getElementById('calculation').addEventListener('click', function () {
    // income field
    const incomeField = document.getElementById('income');
    const totalIncome = incomeField.value;
    incomeField.value = '';

    // food field
    const foodField = document.getElementById('food');
    const foodData = foodField.value;
    foodField.value = '';

    // rent field
    const rentField = document.getElementById('rent');
    const rentData = rentField.value;
    rentField.value = '';

    // cloth field
    const clothField = document.getElementById('cloth');
    const clothData = clothField.value;
    clothField.value = '';

    // food and cloth  and rent field sum
    function totalExpense(){
        parseFloat(foodData) + parseFloat(rentData) + parseFloat(clothData);
    }
    // minus total-income to total-expanse
    function totalBalance(){
        totalIncome - totalExpense();
    }
    const totalBalance = totalIncome - totalExpense;
});
    // Set all value
    function expense(){
        document.getElementById('expense');
        innerText = totalExpense;
    }
   
    expense();
    function blance(){
        document.getElementById('balance');
        innerText = totalBalance;
    }
   blance();
    



        // saving area

document.getElementById('save-btn').addEventListener('click',function(){
    const saving = document.getElementById('saving');
    const yourSaving = saving.value;
    saving.value = '';

const totalSaving = yourSaving % blance();

const totalRemaining = totalSaving-blance() ;
});
function saving(){
    document.getElementById('saving');
    innerText = totalSaving;
}

saving();

function remaining(){
    document.getElementById('remaining');
    innerText = totalRemaining;
}

remaining();
