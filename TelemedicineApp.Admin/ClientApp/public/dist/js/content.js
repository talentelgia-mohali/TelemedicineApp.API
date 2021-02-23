$(function () {
    $("#tblDoctors").DataTable({
        "responsive": true, "lengthChange": false, "autoWidth": false,
    }).buttons().container(10).appendTo('#example1_wrapper .col-md-6:eq(0)');
});