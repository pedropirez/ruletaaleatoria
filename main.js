let timeoutId;
function initializeTheResults(results) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
        console.log(results);
        if (results.value === 1) {
            swal({
                type: 'success',
                title: "Congratulations!",
                html: results.message
            });
            var spans = $(".tries span.yes");
            var currentValue = parseInt(spans.text());
            spans.text(currentValue + 1);
        } else if (results.value === 2) {
            swal({
                type: 'success',
                title: "May Be!",
                html: results.message
            });
            var spans = $(".tries span.maybe");
            var currentValue = parseInt(spans.text());
            spans.text(currentValue + 1);
        } else {
            swal("Oops!", results.message, "error");
            var spans = $(".tries span.no");
            var currentValue = parseInt(spans.text());
            spans.text(currentValue + 1);
        }
        $('.wheel-horizontal-spin-button:disabled').prop('disabled', false).html('<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 96c38.4 0 73.7 13.5 101.3 36.1l-32.6 32.6c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9H448c8.8 0 16-7.2 16-16V64c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-34 34C363.4 52.6 312.1 32 256 32c-10.9 0-21.5 .8-32 2.3V99.2c10.3-2.1 21-3.2 32-3.2zM132.1 154.7l32.6 32.6c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V64c0-8.8-7.2-16-16-16H64c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l34 34C52.6 148.6 32 199.9 32 256c0 10.9 .8 21.5 2.3 32H99.2c-2.1-10.3-3.2-21-3.2-32c0-38.4 13.5-73.7 36.1-101.3zM477.7 224H412.8c2.1 10.3 3.2 21 3.2 32c0 38.4-13.5 73.7-36.1 101.3l-32.6-32.6c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8V448c0 8.8 7.2 16 16 16H448c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-34-34C459.4 363.4 480 312.1 480 256c0-10.9-.8-21.5-2.3-32zM256 416c-38.4 0-73.7-13.5-101.3-36.1l32.6-32.6c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H64c-8.8 0-16 7.2-16 16l0 112c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l34-34C148.6 459.4 199.9 480 256 480c10.9 0 21.5-.8 32-2.3V412.8c-10.3 2.1-21 3.2-32 3.2z"/></svg>');
    }, 500);
}
function initialize_wheel(maybe=false, items=3) {
    window.maybe = maybe;
    let result = [];
    if (maybe === true) {
        result = [];
        obj = [{
            text: "YES",
            value: 1,
            message: "YES",
            discount: "no",
            background: "var(--global-palette1)",
        }, {
            text: "NO",
            value: 0,
            message: "NO",
            discount: "no",
            background: "var(--global-palette2)",
        }, {
            text: "May Be",
            value: 2,
            message: "May Be",
            discount: "no",
            background: "var(--global-palette3)",
        }];
        for (let i = 0; i < items; i++) {
            result = [...result, ...obj]
        }
        $(".wheel_wrapper_main .tries span.maybe").removeClass('d-none')
    } else {
        result = [];
        obj = [{
            text: "YES",
            value: 1,
            message: "YES",
            discount: "no",
            background: "var(--global-palette1)",
        }, {
            text: "NO",
            value: 0,
            message: "NO",
            discount: "no",
            background: "var(--global-palette2)",
        }];
       
        for (let i = 0; i < items; i++) {
            result = [...result, ...obj]
        }
        $(".wheel_wrapper_main .tries span.maybe").addClass('d-none')
    }
    console.log(result);
    $('.wheel-horizontal').superWheel({
        slices: result,
        text: {
            color: 'var(--global-palette9)',
            offset: 11,
            letterSpacing: 0,
            orientation: 'h',
        },
        line: {
            width: 4,
            color: "var(--global-palette6)"
        },
        outer: {
            width: 8,
            color: "var(--global-palette6)"
        },
        inner: {
            width: 10,
            color: "var(--global-palette6)"
        },
        marker: {
            background: "var(--global-palette5)"
        },
        selector: "value"
    });
    var tick = new Audio(pickerwheelObject.folderPath + '/tick.mp3');
    tick.play();
    $(document).on('click', '.wheel-horizontal-spin-button', function(e) {
        $('.wheel-horizontal').superWheel('start', 'value', Math.floor(Math.random() * (window.maybe === true ? 3 : 2)));
        $(this).prop('disabled', true);
    });
    $('.wheel-horizontal').superWheel('onStart', function(results) {
        $('.wheel-horizontal-spin-button').html('<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 96c38.4 0 73.7 13.5 101.3 36.1l-32.6 32.6c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9H448c8.8 0 16-7.2 16-16V64c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-34 34C363.4 52.6 312.1 32 256 32c-10.9 0-21.5 .8-32 2.3V99.2c10.3-2.1 21-3.2 32-3.2zM132.1 154.7l32.6 32.6c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V64c0-8.8-7.2-16-16-16H64c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l34 34C52.6 148.6 32 199.9 32 256c0 10.9 .8 21.5 2.3 32H99.2c-2.1-10.3-3.2-21-3.2-32c0-38.4 13.5-73.7 36.1-101.3zM477.7 224H412.8c2.1 10.3 3.2 21 3.2 32c0 38.4-13.5 73.7-36.1 101.3l-32.6-32.6c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8V448c0 8.8 7.2 16 16 16H448c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-34-34C459.4 363.4 480 312.1 480 256c0-10.9-.8-21.5-2.3-32zM256 416c-38.4 0-73.7-13.5-101.3-36.1l32.6-32.6c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H64c-8.8 0-16 7.2-16 16l0 112c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l34-34C148.6 459.4 199.9 480 256 480c10.9 0 21.5-.8 32-2.3V412.8c-10.3 2.1-21 3.2-32 3.2z"/></svg>');
    });
    $('.wheel-horizontal').superWheel('onStep', function(results) {
        if (typeof tick.currentTime !== 'undefined')
            tick.currentTime = 0;
        tick.play();
    });
    $('.wheel-horizontal').superWheel('onComplete', function(results) {
        initializeTheResults(results);
    });
    jQuery('.sWheel-center').html(`<button type="button" class="button button-primary wheel-horizontal-spin-button">
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 96c38.4 0 73.7 13.5 101.3 36.1l-32.6 32.6c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9H448c8.8 0 16-7.2 16-16V64c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-34 34C363.4 52.6 312.1 32 256 32c-10.9 0-21.5 .8-32 2.3V99.2c10.3-2.1 21-3.2 32-3.2zM132.1 154.7l32.6 32.6c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V64c0-8.8-7.2-16-16-16H64c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l34 34C52.6 148.6 32 199.9 32 256c0 10.9 .8 21.5 2.3 32H99.2c-2.1-10.3-3.2-21-3.2-32c0-38.4 13.5-73.7 36.1-101.3zM477.7 224H412.8c2.1 10.3 3.2 21 3.2 32c0 38.4-13.5 73.7-36.1 101.3l-32.6-32.6c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8V448c0 8.8 7.2 16 16 16H448c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-34-34C459.4 363.4 480 312.1 480 256c0-10.9-.8-21.5-2.3-32zM256 416c-38.4 0-73.7-13.5-101.3-36.1l32.6-32.6c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H64c-8.8 0-16 7.2-16 16l0 112c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l34-34C148.6 459.4 199.9 480 256 480c10.9 0 21.5-.8 32-2.3V412.8c-10.3 2.1-21 3.2-32 3.2z"/></svg></button>`)
}
function initialize_wheel_items(items) {
    initialize_wheel(window.maybe, items);
}
jQuery(document).ready(function($) {
    initialize_wheel();
});
