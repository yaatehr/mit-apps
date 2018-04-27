export function toAppUrl(url) {
    return window.location.href = url;
}


export function getByIdArray(selectedIds, reducerArray ){
    return selectedIds.map((id) => reducerArray[id]);
  }

  
  export function getById(reducerArray){
    return Object.keys(reducerArray).map((id) => reducerArray[id]);
  }
  