// import * as $ from 'jquery'
// import 'bootstrap'

let onSubmitFunc = (event) => {
   event.preventDefault();
   let username: any = document.getElementById('input-username');
   let password: any = document.getElementById('input-password');
   let sex: any = document.getElementById('input-sex');
   let services: any = document.getElementsByName('services');
   let favors: any = document.getElementsByName('favorite-item');

   let chosenService = getService(services);
   let chosenFavors = getFavors(favors);

   let results = [username, password, sex, chosenService, chosenFavors];
   let labels = document.getElementsByTagName('label');
   setLabelToElem(labels);
   let print = pushToModal(results);
   
   document.getElementById('my-modal-body').innerHTML = print;
}
let getService = services => {
   for (const item of services) {
      if (item.checked) return item;
   }
}
let getFavors = favors => {
   let checkedFavors = [];
   for (const item of favors) {
      if (item.checked) checkedFavors.push(item);
   }
   return checkedFavors;
}
// Set a new property 'label' for all element have <label>
let setLabelToElem = (labels) => {
   for (const lbl of labels) {
      if (lbl.htmlFor !== '') {
         let element: any = document.getElementById(lbl.htmlFor);
         if (element) element.label = lbl;
      }
   }
}
let pushToModal = (infors): string => {
   let result: string = '';
   for (let i = 0; i < infors.length; i++) {
      const element = infors[i];
      if (i < 3) {
         result += `<div>${element.label.innerHTML}: ${element.value}</div>`;
      } else if (i < 4) {
         result += `<div>Service: ${element.label.innerHTML}</div>`;
      } else {
         result += `<div>Favorites: `;
         if (element instanceof Array) {
            for (const it of element) {
               result += `${it.label.innerHTML} `;
            }
         }
         result += `</div>`
      }
   }
   return result;
}
