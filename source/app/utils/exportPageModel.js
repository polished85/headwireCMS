
function exportPageModel(){
  var page = this.state.page
  var pageJSON = prettyjson.render(page)
  console.log(pageJSON)
}

export default exportPageModel
