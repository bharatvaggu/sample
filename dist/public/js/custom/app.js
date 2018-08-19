var setupDetails = {};
var headerLinks = {};
var userDetails = {};
var userPermission = [];
var isIOSDevice = false;
var isTouchDevice = false;
var browserDetection = 40;
var agGridKey = "Evaluation_License_Valid_Until__13_October_2018__MTUzOTM4NTIwMDAwMA==b5fbbcd5248da7b75520ceb913b70cfb";

/** Added by Pranav Kulkarni on 29-06-2018 for NEWCMMS-461 */
var headerLinks = { "HOME": {
                "label": lang('HOME'),
                "link": "/",
				"id": "HOME",
				"font_awesome_class": "fa fa-home",
                "subheader": [{
                    "label": lang('ANNOUNCEMENTS', 'Announcements'),
                    "link": "/announcements",
                    "id": "ANNOUNCEMENTS"
                }, {
                    "label": lang('DOCUMENTS_MEDIA', 'Documents/Media'),
                    "link": "/documents-media",
                    "id": "DOCUMENTS_MEDIA"
                }, {
                    "label": lang('EVENTS', 'Events'),
                    "link": "/events",
                    "id": "EVENTS"
                }]
            },
            "CHECKPOINT": {
                "label": lang('CHECKPOINT', 'CheckPoint'),
                "link": "/scan-list",
				"id": "CHECKPOINT",
				"font_awesome_class": "fa fa-home",
                "subheader": [{
                    "label": lang('SCANLIST', 'Scan List'),
                    "link": "/scan-list",
                    "id": "SCANLIST"
                }, {
                    "label": lang('SCHEDULER', 'Scheduler'),
                    "link": "/scheduler",
                    "id": "SCHEDULER"
                }, {
                    "label": lang('ANALYTICS_REPORTS', 'Analytics/Reports'),
                    "link": "/cp-analytics-reports",
                    "id": "CP_ANALYTICS_REPORTS"
                }]
            },
            "GUESTLIST": {
                "label": lang('GUESTLIST', 'GuestList'),
                "link": "/guest-checkin-list",
				"id": "GUESTLIST",
				"font_awesome_class": "fa fa-home",
                "subheader": [{
                    "label": lang('GUEST_CHECKIN_LIST', 'Guest Check-In List'),
                    "link": "/guest-checkin-list",
                    "id": "GUEST_CHECKIN_LIST"
                }, {
                    "label": lang('GUESTS', 'Guests'),
                    "link": "/guests",
                    "id": "GUESTS"
                }]
            },
            "CMMS": {
                "label": lang("CMMS", 'CMMS'),
                "link": "/work-order",
				"id": "CMMS",
				"font_awesome_class": "fa fa-home",
                "subheader": [{
                    "label": lang("WORK_ORDERS", 'Work Orders'),
                    "link": "/work-order",
                    "id": "WORK_ORDERS"
                }, {
                    "label": lang("PURCHASE_ORDERS", 'Purchase Orders'),
                    "link": "/purchase-order",
                    "id": "PURCHASE_ORDERS"
                }, {
                    "label": lang("PREVENTIVE_MAINTENANCE", 'Preventive Maintenance'),
                    "link": "/preventive-maintenance",
                    "id": "PREVENTIVE_MAINTENANCE"
                }]
            },
            "IMS": {
                "label": lang("IMS", 'IMS'),
                "link": "/ims-dashboard",
				"id": "IMS",
				"font_awesome_class": "fa fa-home",
                "subheader": [{
                    "label": lang("DISPATCH_QUEUE", 'Dispatch Queue'),
                    "link": "/dispatch-queue",
                    "id": "DISPATCH_QUEUE"
                }, {
                    "label": lang("ADVANCED_SEARCH", 'Advanced Search'),
                    "link": "/advanced-search",
                    "id": "ADVANCED_SEARCH"
                }, {
                    "label": lang("ASSOCIATED_PERSON", 'Associated Person'),
                    "link": "/associated-person",
                    "id": "ASSOCIATED_PERSON"
                }, {
                    "label": lang("ANALYTICS_REPORTS", 'Analytics/Reports'),
                    "link": "/ims-analytics-reports",
                    "id": "IMS_ANALYTICS_REPORTS"
                }]
            },
            "LF": {
                "label": lang("LF", 'L&F'),
                "link": "/lost-claims",
				"id": "LF",
				"font_awesome_class": "fa fa-home",
                "subheader": [{
                    "label": lang("LOST_CLAIMS", 'Lost Claims'),
                    "link": "/lost-claims",
                    "id": "LOST_CLAIMS"
                }, {
                    "label": lang("FOUND_ITEMS", 'Found Items'),
                    "link": "/found-items",
                    "id": "FOUND_ITEMS"
                }, {
                    "label": lang("CLAIMED_ITEMS", 'Claimed Items'),
                    "link": "/claimed-items",
                    "id": "CLAIMED_ITEMS"
                }, {
                    "label": lang("MATCHING_ITEMS", 'Matching Items'),
                    "link": "/matching-items",
                    "id": "MATCHING_ITEMS"
                },
                {
                    "label": lang("REPORTS", 'Reports'),
                    "link": "/reports",
                    "id": "REPORTS"
                }]
            },
            "RT": {
                "label": lang("RT", 'Request Tracker'),
                "link": "/request-tracker-dashboard",
				"id": "RT",
				"font_awesome_class": "fa fa-home",
                "subheader": [{
                    "label": lang("REQUEST_QUEUE", 'Request Queue'),
                    "link": "/request-queue",
                    "id": "REQUEST_QUEUE"
                }, {
                    "label": lang("ANALYTICS_REPORTS", 'Analytics/Reports'),
                    "link": "/rt-analytics-reports",
                    "id": "RT_ANALYTICS_REPORTS"
                }]
            },
            "TASKS": {
                "label": lang("TASKS", 'Tasks'),
                "link": "/daily-tasks",
				"id": "TASKS",
				"font_awesome_class": "fa fa-home",
                "subheader": [{
                    "label": lang("DAILY_TASKS", 'Daily Tasks'),
                    "link": "/daily-tasks",
                    "id": "DAILY_TASKS"
                }, {
                    "label": lang("FUTURE_TASKS", 'Future Tasks'),
                    "link": "/future-tasks",
                    "id": "FUTURE_TASKS"
                }, {
                    "label": lang("RECURRING_TASKS", 'Recurring Tasks'),
                    "link": "/recurring-tasks",
                    "id": "RECURRING_TASKS"
                }, {
                    "label": lang("COMPLETED_TASKS", 'Completed Tasks'),
                    "link": "/completed-tasks",
                    "id": "COMPLETED_TASKS"
                }, {
                    "label": lang("ANALYTICS_REPORTS", 'Analytics/Reports'),
                    "link": "/tasks-analytics-reports",
                    "id": "TASKS_ANALYTICS_REPORTS"
                }]
            },
            "CONVERSATIONS": {
                "label": lang("CONVERSATIONS", 'Conversations'),
                "link": "/security-messages",
				"id": "CONVERSATIONS",
				"font_awesome_class": "fa fa-home",
                "subheader": [{
                    "label": lang("SECURITY_MESSAGES", 'Security Messages'),
                    "link": "/security-messages",
                    "id": "SECURITY_MESSAGES"
                }, {
                    "label": lang("GUEST_SERVICE_MESSAGES", 'Guest Service Messages'),
                    "link": "/guest-service-messages",
                    "id": "GUEST_SERVICE_MESSAGES"
                }, {
                    "label": lang("WEB_FORM_SCRIPT", 'Web Form Script'),
                    "link": "/web-form-script",
                    "id": "WEB_FORM_SCRIPT"
                }]
            },
            "ACTIVITY_LOG": {
                "label": lang("ACTIVITY_LOG", 'Activity Log'),
                "link": "/activity-log-dashboard",
				"id": "ACTIVITY_LOG",
				"font_awesome_class": "fa fa-home",
                "subheader": [{
                    "label": lang("ACTIVITY_LOG_QUEUE", 'Activity Log Queue'),
                    "link": "/activity-log-queue",
                    "id": "ACTIVITY_LOG_QUEUE"
                }, {
                    "label": lang("ANALYTICS_REPORTS", 'Analytics/Reports'),
                    "link": "/activity-log-analytics-reports",
                    "id": "ACTIVITY_LOG_ANALYTICS_REPORTS"
                }]
            }
        };

// var getC3Header = function () {
// 	if (typeof headerLinks.HOME == 'undefined') {
// 		$.ajax({
// 			async: false,
// 			url: BASEURL + "/C3/C3User/getC3Header",
// 			success: function (response) {
// 				if (response.success) {
// 					headerLinks = response.records;
// 					userDetails = response.user_details;
// 					userPermission = response.user_permission;
// 				}
// 			}
// 		});
// 	}
// }

// getC3Header();

var calcHeaderWidth = function () {
	var navwidth = 0;
	var morewidth = $('#header-menu .header-more').outerWidth(true);

	$('#header-menu > li:not(.header-more)').each(function () {
		navwidth += $(this).outerWidth(true);
	});

	//var availablespace = $('nav').outerWidth(true) - morewidth;
	var availablespace = $('#header-nav-main').width() - morewidth;

	if (navwidth > availablespace) {
		var lastItem = $('#header-menu > li:not(.header-more)').last();
		lastItem.attr('data-width', lastItem.outerWidth(true));
		lastItem.prependTo($('.header-more-popover-links'));
		calcHeaderWidth();
	} else {
		var firstMoreElement = $('ul.header-more-popover-links li').first();
		if (navwidth + firstMoreElement.data('width') < availablespace) {
			firstMoreElement.insertBefore($('#header-menu .header-more'));
			$('.popover-body ul li').first().remove();
			calcHeaderWidth();
		}
	}

	if ($('.header-more li').length > 0) {
		$('.header-more').css('display', 'block');
	} else {
		$('.header-more').css('display', 'none');
	}
}

var calcHeaderWidthDevice = function () {
	var navwidth = 0;
	var morewidth = $('#header-menu-device .header-more-device').outerWidth(true);
	$('#header-menu-device > li:not(.header-more-device)').each(function () {
		navwidth += $(this).outerWidth(true);
	});
	//var availablespace = $('nav').outerWidth(true) - morewidth;
	var availablespace = $('#header-nav-main-device').width() - morewidth;

	if (navwidth > availablespace) {
		var lastItem = $('#header-menu-device > li:not(.header-more-device)').last();
		var lastItemDataContent = lastItem.children().attr('data-content');
		lastItem.append(lastItemDataContent);
		lastItem.attr('data-width', lastItem.outerWidth(true));
		lastItem.prependTo($('.header-more-device-popover-links'));
		calcHeaderWidth();
	} else {
		var firstMoreElement = $('ul.header-more-device-popover-links li').first();
		if (navwidth + firstMoreElement.data('width') < availablespace) {
			if (typeof firstMoreElement.children()[1] != 'undefined') {
				firstMoreElement.children()[1].remove();
				firstMoreElement.insertBefore($('#header-menu-device .header-more-device'));
				$('.popover-body ul li').first().remove();
				calcHeaderWidth();
			}
		}
	}

	if ($('.header-more-device li').length > 0) {
		$('.header-more-device').css('display', 'block');
	} else {
		$('.header-more-device').css('display', 'none');
	}
}

var calcSubHeaderWidth = function () {
	var navwidth = 0;
	var morewidth = $('#subheader-main .subheader-more').outerWidth(true);

	$('#subheader-main > li:not(.subheader-more)').each(function () {
		navwidth += $(this).outerWidth(true);
	});

	//var availablespace = $('nav').outerWidth(true) - morewidth;
	var availablespace = $('#subheader-nav-main').width() - morewidth;

	if (navwidth > availablespace) {
		var lastItem = $('#subheader-main > li:not(.subheader-more)').last();
		lastItem.attr('data-width', lastItem.outerWidth(true));
		lastItem.prependTo($('.subheader-more-popover-links'));
		calcSubHeaderWidth();
	} else {
		var firstMoreElement = $('ul.subheader-more-popover-links li').first();
		if (navwidth + firstMoreElement.data('width') < availablespace) {
			firstMoreElement.insertBefore($('#subheader-main .subheader-more'));
			$('.popover-body ul li').first().remove();
			calcSubHeaderWidth();
		}
	}

	if ($('.subheader-more li').length > 0) {
		$('.subheader-more').css('display', 'block');
	} else {
		$('.subheader-more').css('display', 'none');
	}
}

var getDateTimeInUserFormat = function () {
	var timeZone = userDetails.timezone ? userDetails.timezone : 'America/New_York';
	var dateFormat = userDetails.date_format ? userDetails.date_format : 'YYYY-MM-DD'
	var timeFormat = userDetails.time_format ? userDetails.time_format : 24;
	timeFormat = timeFormat == 24 ? 'HH:mm:ss' : 'hh:mm:ss A';
	return moment().tz(timeZone).format(dateFormat + ' ' + timeFormat);
}

var getUserDateTimeFormat = function () {
	let dateFormat = 'yyyy/MM/dd';
	switch (userDetails.date_format) {
		case 'MM/DD/YYYY':
			dateFormat = 'MM/dd/yyyy'
			break;
		case 'DD/MM/YYYY':
			dateFormat = 'dd/MM/yyyy'
			break;
		case 'YYYY/MM/DD':
			dateFormat = 'yyyy/MM/dd'
			break;
	}

	let timeFormat = userDetails.time_format == '12' ? 'hh:mm:ss tt' : 'HH:mm:ss';

	return dateFormat + ', ' + timeFormat;
}

$(document).ready(function () {
	$(window).on('resize load', function () {
		calcHeaderWidth();
		calcHeaderWidthDevice();
		calcSubHeaderWidth();
	});

	isTouchDevice = $.jqx.mobile.isTouchDevice();

	isIOSDevice = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false;
});

var createCustomFilter = (filterType, filterPanel, datafield, grid) => {
	if (filterType) {
		let filterID = grid.componentSelector;
		filterID = filterID.replace("#", '');
		let column = grid.getcolumn(datafield);
		if (filterType === "textfilter") {
			let inputContainer = document.createElement('div');

			let buttonsContainer = document.createElement('div');
			// buttonsContainer.className = 'filter';
			buttonsContainer.id = 'mycustomfilter' + filterID;
			Object.assign(buttonsContainer.style, { height: '25px', marginTop: '7px' })

			let filterButtonContainer = document.createElement('div');
			let filterClearButtonContainer = document.createElement('div');
			let filterClearAllButtonContainer = document.createElement('div');// For filter option story
			let filterResetGridButtonContainer = document.createElement('div');// For reset grid button

			var textFieldWidth = 178;
			if (typeof grid.props.customfilterbuttons != "undefined" && grid.props.customfilterbuttons) {
				textFieldWidth = 258;
			}

			buttonsContainer.appendChild(filterButtonContainer);
			buttonsContainer.appendChild(filterClearButtonContainer);
			buttonsContainer.appendChild(filterClearAllButtonContainer);// For filter option story
			if (typeof grid.props.customfilterbuttons != "undefined" && grid.props.customfilterbuttons) {
				buttonsContainer.appendChild(filterResetGridButtonContainer);// For filter option story
			}

			filterPanel[0].appendChild(inputContainer);
			filterPanel[0].appendChild(buttonsContainer);

			Object.assign(filterPanel[0].style, { padding: "1px 0px 3px", marginLeft: "2px" });

			let filterTextField = document.createElement('input');
			filterTextField.setAttribute("type", "text");
			filterTextField.setAttribute("id", "customtext" + datafield + filterID);
			filterTextField.setAttribute("class", "input custom-filter-input jqx-input");
			filterTextField.setAttribute("placeholder", lang("ENTER") + " " + column.text);
			filterTextField.setAttribute("maxlength", 250);
			filterTextField.setAttribute("style", "width: 98.5%;/*" + textFieldWidth + "px;*/ margin-right: 2px;");
			inputContainer.appendChild(filterTextField);

			let filterButton = document.createElement('button');
			filterButton.setAttribute("id", "customfilterbutton" + filterID);
			filterButton.setAttribute("style", 'float: left; min-width: 52px');
			filterButton.innerHTML = lang('FILTER');

			let clearButton = document.createElement('button');
			clearButton.setAttribute("id", "customfilterclearbutton" + filterID);
			clearButton.setAttribute("style", 'margin-left: 5px; float: left; min-width: 52px');
			clearButton.innerHTML = lang('CLEAR');

			// For filter option story
			let clearAllButton = document.createElement('button');
			clearAllButton.setAttribute("id", "customfilterclearallbutton" + filterID);
			clearAllButton.setAttribute("class", "filterclearallbutton");
			clearAllButton.setAttribute("style", 'margin-left: 5px; float: left;');
			clearAllButton.innerHTML = lang('CLEAR_ALL');
			// End of for filter option story

			if (typeof grid.props.customfilterbuttons != "undefined" && grid.props.customfilterbuttons) {
				// For reset grid button
				var resetGridButton = document.createElement('button');
				resetGridButton.setAttribute("id", "customresetgridbutton" + filterID);
				resetGridButton.setAttribute("class", "resetgridbutton");
				resetGridButton.setAttribute("style", 'margin-left: 5px; float: left;');
				resetGridButton.innerHTML = lang('RESET_GRID');
			}

			filterButtonContainer.appendChild(filterButton);
			filterClearButtonContainer.appendChild(clearButton);
			filterClearAllButtonContainer.appendChild(clearAllButton);// for filter option story

			if (typeof grid.props.customfilterbuttons != "undefined" && grid.props.customfilterbuttons) {
				filterResetGridButtonContainer.appendChild(resetGridButton);// for reset grid button
			}

			let filterGrid = () => {
				let filters = grid.getfilterinformation();
				let returnVar = true;
				let searchValue = $("#customtext" + datafield + filterID).val().trim();
				for (const key in filters) {
					if ((searchValue && filters[key].filter.getfilters()[0].value) && (searchValue === filters[key].filter.getfilters()[0].value) && (datafield === filters[key].datafield)) {
						returnVar = false;
					}
				}

				if (returnVar && searchValue) {
					let filtergroup = new jqx.filter();
					filtergroup.addfilter(1, filtergroup.createfilter('stringfilter', searchValue, 'contains'));
					grid.addfilter(datafield, filtergroup);
					grid.applyfilters();
					grid.closemenu();
				} else {
					$("#customtext" + datafield + filterID).focus();
				}
			}

			let removeFilter = () => {
				let filters = grid.getfilterinformation();
				let filterGrid = false;
				let searchValue = $("#customtext" + datafield + filterID).val().trim();
				for (const key in filters) {
					if ((!searchValue && filters[key].filter.getfilters()[0].value) && (datafield === filters[key].datafield)) {
						filterGrid = true;
						break;
					}
				}

				if (filterGrid || searchValue) {
					$("#customtext" + datafield + filterID).val('');
					grid.removefilter(datafield);
					grid.closemenu();
				} else if (!filterGrid && !searchValue) {
					$("#customtext" + datafield + filterID).val('');
					$("#customtext" + datafield + filterID).focus();
				}

			}

			// For filter option story
			let removeAllFilter = () => {
				let filters = grid.getfilterinformation();
				let clearfilterGrid = false;
				for (const key in filters) {
					if (filters[key].filter.getfilters()[0].value) {
						clearfilterGrid = true;
						break;
					}
				}
				if (clearfilterGrid) {
					let columnsToResetFilter = 0;
					grid.props.columns.map((column) => {
						if (typeof column.createfilterpanel === "function") {
							grid.removefilter(column.datafield, false);
							columnsToResetFilter++;
							$('#customtext' + column.datafield + filterID).val('');
						}
					});
					if (columnsToResetFilter) {
						grid.clearfilters();
					}
				}
				grid.closemenu();
			};
			// End of for filter option story

			$("#customtext" + datafield + filterID).keypress(function (e) {
				if (e.which == 13) {
					if ($(this).val().trim().length) {
						filterGrid();
					} else {
						removeFilter();
					}
				}
			});

			$("#customfilterbutton" + filterID).on('click', () => {
				if ($("#customtext" + datafield + filterID).val().trim().length) {
					filterGrid();
				} else {
					removeFilter();
				}
			});

			$("#customfilterclearbutton" + filterID).on('click', () => {
				removeFilter();
				grid.closemenu();
			});

			// For filter option story
			$("#customfilterclearallbutton" + filterID).on('click', () => {
				removeAllFilter();
			});

			$("#gridmenu" + filterID).on("shown", (event) => {
				var filters = grid.getfilterinformation();
				if (filters.length) {
					for (const key in filters) {
						if ((datafield === filters[key].datafield) && ('' !== filters[key].filter.getfilters()[0].value)) {
							$("#customtext" + datafield + filterID).val(filters[key].filter.getfilters()[0].value);
						}
					}
				} else {
					if ($("#customtext" + datafield + filterID)) {
						$("#customtext" + datafield + filterID).val("");
					}
				}

				var resetbuttonwidth = (typeof grid.props.customfilterbuttons != "undefined" && grid.props.customfilterbuttons) ? $("#" + "customresetgridbutton" + filterID).width() : -26 ;
				var buttoncontainerwidth = $("#" + "customfilterbutton" + filterID).width() + $("#" + "customfilterclearbutton" + filterID).width() + $("#" + "customfilterclearallbutton" + filterID).width() + resetbuttonwidth + (20 + 63);
				buttoncontainerwidth += (typeof grid.props.customfilterbuttons != "undefined" && grid.props.customfilterbuttons) ? 2 : 3;
				$("#" + "customtext" + datafield + filterID).width(parseInt(buttoncontainerwidth));
			});

			if (typeof grid.props.customfilterbuttons != "undefined" && grid.props.customfilterbuttons) {
			$("#customresetgridbutton" + filterID).click(function() {
				var config = $("#" + filterID).jqxGrid('defaultgridconfig');
				delete config.filters;
				$("#" + filterID).jqxGrid('loadstate', config);
				setTimeout(function() {
					$("#" + filterID).jqxGrid('loadstate', config);
				}, 50);
				grid.closemenu();
			});
			}
			// End of for filter option story
		}
	}
};
/* End of Added by Pritam */
/** Added bootstrap notification by Priyanka N */
var notification = function (notify) {
	var icon = "fa fa-check";
	var backGroundColor = "#009966 !important;";
	var type = "success";
	if(notify['message'] != '' && notify['message']){
		if(notify['type'] == 'danger'){
			icon = "fa fa-exclamation-triangle";
			backGroundColor = "#FF0000 !important;";
			type = notify['type'];
		}else if(notify['type'] == 'warning'){
			icon = "fa fa-exclamation-circle";
			backGroundColor = "#FFCC33 !important;";
			type = notify['type'];
		}
		$.notify(
			{
				message: notify['message'],
				icon:icon
			},{
				animate: {
					enter: 'animated fadeInRight'
				},
				type: type,
				icon_type: 'class',
				mouse_over:'pause',
				delay:1500,
				z_index: 1050,
				offset:{
					x:30,
					y:91
				},
				template: '<div data-notify="container" class="col-xs-11 col-sm-5 alert alert-{0} alert-tr" style = "min-width:280px;max-width:280px;line-height:1.2" >' +
				'<table class="alert-table-margin"><tr>'+
				'<td style= "background:'+backGroundColor+';"><span data-notify="icon" class="alert-icon-div"></span></td>'+
				'<td style="padding:10px 5px 8px 10px;"><span data-notify="message">{2}</span></td>'+
				'<td style="padding-left:25px;"><i class="alert-dismiss fa fa-times" style ="cursor:pointer" data-notify="dismiss"></i></td>'+
				'</tr></table>'+
				'</div>'
			}
		);
	}
}
/** End by Priyanka N here */

/** Added by Pranav Kulkarni, Date: 18-04-2018, Purpose: Custom sort function for natural order sorting required for grids having local data (C3 Child Templates)
 *  Parameters: sortcolumn, sortdirection and respective grid's local data
 */
let customSort = function (sortColumn, sortDirection, gridLocalData) {
	let alphabet;
	let alphabetIndexMap;
	let alphabetIndexMapLength = 0;

	let isNumberCode = (code) => {
		return code >= 48 && code <= 57;
	}

	let naturalCompare = (a, b) => {
		let lengthA = (a += '').length;
		let lengthB = (b += '').length;
		let aIndex = 0;
		let bIndex = 0;

		while (aIndex < lengthA && bIndex < lengthB) {
			let charCodeA = a.charCodeAt(aIndex);
			let charCodeB = b.charCodeAt(bIndex);

			if (isNumberCode(charCodeA)) {
				if (!isNumberCode(charCodeB)) {
					return charCodeA - charCodeB;
				}

				let numStartA = aIndex;
				let numStartB = bIndex;

				while (charCodeA === 48 && ++numStartA < lengthA) {
					charCodeA = a.charCodeAt(numStartA);
				}
				while (charCodeB === 48 && ++numStartB < lengthB) {
					charCodeB = b.charCodeAt(numStartB);
				}

				let numEndA = numStartA;
				let numEndB = numStartB;

				while (numEndA < lengthA && isNumberCode(a.charCodeAt(numEndA))) {
					++numEndA;
				}
				while (numEndB < lengthB && isNumberCode(b.charCodeAt(numEndB))) {
					++numEndB;
				}

				let difference = numEndA - numStartA - numEndB + numStartB; // numA length - numB length
				if (difference) {
					return difference;
				}

				while (numStartA < numEndA) {
					difference = a.charCodeAt(numStartA++) - b.charCodeAt(numStartB++);
					if (difference) {
						return difference;
					}
				}
				aIndex = numEndA;
				bIndex = numEndB;
				continue;
			}
			if (charCodeA !== charCodeB) {
				if (
					charCodeA < alphabetIndexMapLength &&
					charCodeB < alphabetIndexMapLength &&
					alphabetIndexMap[charCodeA] !== -1 &&
					alphabetIndexMap[charCodeB] !== -1
				) {
					return alphabetIndexMap[charCodeA] - alphabetIndexMap[charCodeB];
				}
				return charCodeA - charCodeB;
			}
			++aIndex;
			++bIndex;
		}
		return lengthA - lengthB;
	}

	/* Case insensitive natural sorting */
	naturalCompare.caseInsensitive = naturalCompare.i = function (a, b) {
		return naturalCompare(('' + a).toLowerCase(), ('' + b).toLowerCase());
	};

	Object.defineProperties(naturalCompare, {
		alphabet: {
			get: function () {
				return alphabet;
			},
			set: function (value) {
				alphabet = value;
				alphabetIndexMap = [];
				let i = 0;
				if (alphabet) {
					for (; i < alphabet.length; i++) {
						alphabetIndexMap[alphabet.charCodeAt(i)] = i;
					}
				}
				alphabetIndexMapLength = alphabetIndexMap.length;
				for (i = 0; i < alphabetIndexMapLength; i++) {
					if (alphabetIndexMap[i] === undefined) {
						alphabetIndexMap[i] = -1;
					}
				}
			}
		}
	});

	let sortData = [];
	if (sortDirection == true || sortDirection == 'asc') {
		sortDirection = 'ascending';
	}
	else
		if (sortDirection == false || sortDirection == 'desc') {
			sortDirection = 'descending';
		}
	sortData = gridLocalData;
	let tmpToString = Object.prototype.toString;
	Object.prototype.toString = function () { return this[sortColumn] };
	if (sortDirection != null) {
		if (sortDirection == 'ascending') {
			sortData.sort(naturalCompare.caseInsensitive);
		}
		else
			if (sortDirection == 'descending') {
				sortData.sort(naturalCompare.caseInsensitive);
				sortData.reverse();
			}
	}
	else {
		Object.prototype.toString = function () { return this['id'] };
		sortData.sort();
	}
	Object.prototype.toString = tmpToString;
}
/** Ends here by Pranav Kulkarni */

/* Added by Dhananjay for treegrid NEWCMMS-335 on 10.04.2018 */
var encodeHtmlEntity = function(str) {
	var buf = [];
	for (var i=str.length-1;i>=0;i--) {
	  buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
	}
	return buf.join('');

	/** Added by Pranav Kulkarni on 04-05-2018 for NEWCMMS-374 */
	/*let map = {
		'<': '&lt;',
		'>': '&gt;'
	};
	return text.replace(/[<>]/g, function (m) { return map[m]; }); */
}
/* End Here */

/** Added by Lokesh decoding html entities on 04.05.2018 */
var decodeHtmlEntity = function (str) {
	return str.replace(/&#(\d+);/g, function (match, dec) {
		return String.fromCharCode(dec);
	});
};
/** Ends here */

var disableScroll = function() {
	if (isTouchDevice) {
		$('html, body').css('position', 'fixed');
		$('html, body, .form-div, .form-div-class, .grid-div, .grid-div-class, .quick-link-div, .child-quick-link-div, .template-div').css('overflow', 'hidden');
	}
}

var enableScroll = function() {
	if (isTouchDevice) {
		$('html, body').css('position', 'static');
		$('html, body, .form-div, .form-div-class, .grid-div, .grid-div-class, .quick-link-div, .child-quick-link-div, .template-div').css('overflow', 'auto');
	}
}

/** Added by Lokesh | checking object is empty or not on 18.07.2018 */
var isEmpty = function(obj) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key))
			return false;
	}
	return true;
}