

const loadData = () => {
    const carNumber = document.getElementById('car-input').value;
    fetch(`${carNumber}.json`)
        .then(res => res.json())
        .then(data => showData(data))
}


const showData = (car) => {
    const section = document.getElementById('my-section');
    section.innerHTML = '';
    section.innerHTML = `
    <div class="mx-auto w-75">
            <div class="card mx-auto" style="width: 35rem;">

                <div class="card-body">
                    <ol class="my-list">
                        <li class="text-danger">Status: ${car.status}</li>
                        <li>Number : ${car.number} </li>
                        <li>Name : ${car.name} </li>
                        <li> Model : ${car.model} </li>
                        <li> Color: ${car.color} </li>
                        <li>Weight:${car.weight} </li>
                        <li>Owner Name : ${car.user.name} </li>
                        <li>Address :${car.user.address}</li>
                        <li>Phone:${car.user.phone}</li>
                        
                        <li class="text-danger my-font"> ব্যবস্থা : ${car.action} </li>
                    </ol>
                </div>
            </div>
        </div>
    `
}