<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="manifest" href="manifest.json">
    <link rel="shortcut icon" href="<?php echo $BASEURL; ?>/public/images/favicon.ico">

    <title>247 Software</title>

    <link rel="stylesheet" href="<?php echo $BASEURL; ?>/public/js/jqwidgets/styles/jqx.base.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo $BASEURL; ?>/public/css/jqwidgets/jqwidgets_bootstrap_theme.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo $BASEURL; ?>/public/css/tether/tether.min.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo $BASEURL; ?>/public/css/bootstrap/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo $BASEURL; ?>/public/css/bootstrap/animate.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo $BASEURL; ?>/public/css/font-awesome/font-awesome.min.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo $BASEURL; ?>/public/css/app.css?version=0.4.1" type="text/css" />
    <link rel="stylesheet" href="<?php echo $BASEURL; ?>/public/css/animate.min.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo $BASEURL; ?>/public/css/ag-grid.css" type="text/css" />
    <link rel="stylesheet" href="<?php echo $BASEURL; ?>/public/css/ag-theme-balham.css" type="text/css" />
</head>

<body>
    <div id="page-loading">
        <div class="page-loading"></div>
    </div>
    <div id="App"></div>

    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jquery/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/tether/tether.min.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/bootstrap/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/bootstrap-notify/bootstrap-notify.min.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/pollyfills/es6-promise.min.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/pollyfills/es6-promise.auto.min.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/moment/moment.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/moment/moment-timezone-with-data.js"></script>
    <!-- <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/lang/english/all.js?version=0.3.1"></script> -->
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/lang/<?php echo $redis_data['language'] ? strtolower($redis_data['language']) : 'english' ?>/all.js?version=0.2.2"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/custom/app.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxcore.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxlistbox.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxdropdownlist.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxcombobox.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxdata.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxvalidator.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxscrollbar.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxmenu.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxtree.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxinput.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxtextarea.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxbuttons.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxcheckbox.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxgrid.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxgrid.filter.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxgrid.sort.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxgrid.selection.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxgrid.pager.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxgrid.edit.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxgrid.columnsresize.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxgrid.columnsreorder.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxpopover.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxgrid.grouping.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxgrid.storage.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxtabs.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxpanel.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxdatatable.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxdropdownbutton.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxradiobutton.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxcolorpicker.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxdatetimeinput.js"></script>
    <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/js/jqwidgets/jqxcalendar.js"></script>
    <!-- <script type="text/javascript" src="<?php echo $BASEURL; ?>/public/lang/<?php echo $redis_data['language'] ? strtolower($redis_data['language']) : 'english' ?>/all.js?version=0.2.2"></script> -->
    <div id="preload-check-black" style="display: none;">
    </div>
    <div id="preload-check-in-black" style="display: none;">
    </div>
    <div id="preload-radio-black" style="display: none;">
    </div>
</body>

</html>