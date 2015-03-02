/* =========================================================
 * javascript tab practice => created by kevin hu
 * ========================================================= */

function javascript_tab () {

	var tab = document.getElementsByClassName('tab')[0];

	for(var i=0, j=tab.children.length; i<j; i+=1){
		tab.children[i].addEventListener('click',show_section, false);
	};
};

var show_section = function(){
	var tab = document.getElementsByClassName('tab')[0],
			tab_section = document.getElementsByClassName('tab-section')[0],
			tabindex = this.getAttribute('data-tabindex');

	for(var i=0, j=tab_section.children.length; i<j; i+=1){
		var this_tab = tab.children[i],
				this_tab_section = tab_section.children[i],
				this_class = 'tab';

		if(this_tab_section.getAttribute('data-section') === tabindex){
			if(this_tab_section.className == 'tab active')
				return;
			this_class = 'tab active';
		}

		this_tab.className = this_tab_section.className = this_class;
	}

}
javascript_tab();