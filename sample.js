// Sample
(function ($, undefined) {

	$.dashboard.add_widget_descriptor({
		"id" : "stuart.sample",
		"name" : "Sample Widget",
		"description" : "Sample for demo purposes.",
		"img" : "",
		"event_listeners" : {
			"le.update-timeline" : redraw,
			"dashboard.update-options" : redraw,
			"dashboard.resize" : redraw
		},
		"options_descriptor" : {
			"title" : { "label" : "Title", "value" : "Custom Text"},
			"text" : { "label" : "Text"}
		}
	});


	function redraw() {
		this.div.empty()
			.append("<span>" + this.options.text + "</span>")
			.css("text-align", "center");
	}

 })(jQuery);