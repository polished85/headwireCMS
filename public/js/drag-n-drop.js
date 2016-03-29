document.addEventListener('DOMContentLoaded', function(event) {
  var toggle_side_menu_button = document.getElementById('toggle_side_menu_button');
  var side_menu = document.getElementById('side_menu');

  // toggle side menu
  toggle_side_menu_button.addEventListener('click', function(event) {
     this.classList.toggle('fa-angle-right')
     this.classList.toggle('fa-angle-left')
     side_menu.classList.toggle('closed')
  })

  var data;
  
  /* handle DragStart ====================
  ====================================== */
  var dragSrcEl = null;

  function handleDragStart(e) {
    dragSrcEl = this;

    dragSrcEl.style.border = '1px dashed steelblue';

    var component_data;
    var load_types = dragSrcEl.innerHTML;
    for(var i=0;i<dragSrcEl.childNodes.length;i++){
        if(dragSrcEl.childNodes[i].nodeType == 8){
          component_data = dragSrcEl.childNodes[i].data
        }
    }
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('application/x-headwire-cms.component-data+json', component_data);
  }

  /* drag & drop handlers ====================
  ====================================== */
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // Stops some browsers from redirecting.
    }
    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
      // Set the source column's HTML to the HTML of the column we dropped on.
      var src_data = e.dataTransfer.getData('application/x-headwire-cms.component-data+json');
      // convert src data into js object
      var component_data = eval('(' + src_data + ')');
      console.log(component_data)

      // generate component markup from component data obj
      var el = document.createElement(component_data.type)
      el.textContent = component_data.content
      console.log(el)

      var parentCol = this.parentNode
      console.log(parentCol)
      parentCol.insertBefore(el, this)
    }
    return false;
  }

  function handleDragEnd(e) {
    this.style.border = 'none';
    [].forEach.call(dropZones, function (dropZone) {
      dropZone.classList.remove('over');
    });
  }

  /* attach listeners to draggable components ====================
  ====================================== */
  var components = document.querySelectorAll('#side_menu .component');
  [].forEach.call(components, function(component) {
    component.addEventListener('dragstart', handleDragStart, false);
    component.addEventListener('dragend', handleDragEnd, false);
  });

  /* attach listeners component to drop zones ====================
  ====================================== */
  var dropZones = document.querySelectorAll('.drop-zone');
  [].forEach.call(dropZones, function(dropZone) {
    dropZone.addEventListener('dragstart', handleDragStart, false);
    dropZone.addEventListener('dragenter', handleDragEnter, false);
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('dragleave', handleDragLeave, false);
    dropZone.addEventListener('drop', handleDrop, false);
    dropZone.addEventListener('dragend', handleDragEnd, false);
  });
});