// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-daterangepicker'
import 'select2'
import 'dropzone'
import 'fullcalendar'
import 'moment'
import 'chart.js'
import 'popper.js'
import 'ckeditor'
import 'bootstrap-validator'
import 'jquery-bar-rating'
import 'ion-rangeslider'
import 'editable-table'
import 'datatables.net'
import 'datatables.net-bs'

// import 'slick-carousel'
// import 'main-js'
// import 'perfect-scrollbar'


import '../src/assets/bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css'
import '../src/assets/bower_components/slick-carousel/slick/slick.css'
import '../src/assets/css/main.css?version=4.4.0'
import '../src/assets/bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js'
import '../src/assets/bower_components/slick-carousel/slick/slick.min.js'
import '../src/assets/js/demo_customizer.js?version=4.4.0'
import '../src/assets/js/main.js?version=4.4.0'

// import '../src/assets/bower_components/jquery-bar-rating/dist/jquery.barrating.min.js'
// import '../src/assets/bower_components/bootstrap-validator/dist/validator.min.js'
// import 'bootstrap-validator/dist/validator.min.js'
// import '../src/assets/bower_components/ion.rangeSlider/js/ion.rangeSlider.min.js'
// import '../src/assets/bower_components/editable-table/mindmup-editabletable.js'
// import '../src/assets/bower_components/datatables.net/js/jquery.dataTables.min.js'
// import '../src/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js'
// import '../src/assets/bower_components//select2/dist/css/select2.min.css'
// import '../src/assets/bower_components/bootstrap-daterangepicker/daterangepicker.css'
// import '../src/assets/bower_components/dropzone/dist/dropzone.css'
// import '../src/assets/bower_components/fullcalendar/dist/fullcalendar.min.css'
// import '../src/assets/bower_components/jquery/dist/jquery.min.js'
// import 'jquery/dist/jquery.min.js'
// import '../src/assets/bower_components/popper.js/dist/umd/popper.min.js'
// import '../src/assets/bower_components/moment/moment.js'
// import '../src/assets/bower_components/chart.js/dist/Chart.min.js'
// import '../src/assets/bower_components/select2/dist/js/select2.full.min.js'
// import '../src/assets/bower_components/ckeditor/ckeditor.js'
// import '../src/assets/bower_components/bootstrap-daterangepicker/daterangepicker.js'
// import '../src/assets/bower_components/dropzone/dist/dropzone.js'
// import '../src/assets/bower_components/fullcalendar/dist/fullcalendar.min.js'
// import '../src/assets/bower_components/tether/dist/js/tether.min.js'
// import '../src/assets/bower_components/bootstrap/js/dist/util.js'
// import '../src/assets/bower_components/bootstrap/js/dist/alert.js'
// import '../src/assets/bower_components/bootstrap/js/dist/button.js'
// import '../src/assets/bower_components/bootstrap/js/dist/carousel.js'
// import '../src/assets/bower_components/bootstrap/js/dist/collapse.js'
// import '../src/assets/bower_components/bootstrap/js/dist/dropdown.js'
// import '../src/assets/bower_components/bootstrap/js/dist/modal.js'
// import '../src/assets/bower_components/bootstrap/js/dist/tab.js'
// import '../src/assets/bower_components/bootstrap/js/dist/tooltip.js'
// import '../src/assets/bower_components/bootstrap/js/dist/popover.js'



Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
