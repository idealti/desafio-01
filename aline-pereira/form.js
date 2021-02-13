const name = $("#name").val()
const email = $("#email").val()
const message = $("#message").val()

$(document).ready(function() {
    $("#submit").click(function() {
        $.ajax({
            url: 'http://mockbin.com/request?foo=bar&foo=baz',
            type: "POST",
            dataType: 'json',
            data: {
                name,
                email,
                message
            },
            success: function(data)
        })
    });
});