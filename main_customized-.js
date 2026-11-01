let timeoutId;

window.pickerWheelItemsCount = window.pickerWheelItemsCount || 1;

function pickerWheelRowSelector() {
    return '.custz_wheel .picker-name-row';
}

function setPickerItemsButtonActive(count) {
    window.pickerWheelItemsCount = count;
    $('.no_of_items .items button[data-wheel-items]').removeClass('active');
    $('.no_of_items .items button[data-wheel-items="' + count + '"]').addClass('active');
}

function initializeTheResults(results) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
        console.log(results);
        var title = (typeof results.alertTitle === 'string' && results.alertTitle.length) ? results.alertTitle : results.text;
        swal({
            title: title,
            width: 600,
            padding: "3em",
            color: results.background,
            background: "#fff",
            backdrop: `
			  ${results.background}b9
			  url("${pickerwheelObject.folderPath + 'img/congrats.gif'}")
			  center/cover no-repeat
			`
        });
        var spans = $(`.${results.selector} .counter`);
        var currentValue = parseInt(spans.text());
        spans.text(currentValue + 1);
        $('.wheel-horizontal-spin-button:disabled').prop('disabled', false).html('<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 96c38.4 0 73.7 13.5 101.3 36.1l-32.6 32.6c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9H448c8.8 0 16-7.2 16-16V64c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-34 34C363.4 52.6 312.1 32 256 32c-10.9 0-21.5 .8-32 2.3V99.2c10.3-2.1 21-3.2 32-3.2zM132.1 154.7l32.6 32.6c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V64c0-8.8-7.2-16-16-16H64c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l34 34C52.6 148.6 32 199.9 32 256c0 10.9 .8 21.5 2.3 32H99.2c-2.1-10.3-3.2-21-3.2-32c0-38.4 13.5-73.7 36.1-101.3zM477.7 224H412.8c2.1 10.3 3.2 21 3.2 32c0 38.4-13.5 73.7-36.1 101.3l-32.6-32.6c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8V448c0 8.8 7.2 16 16 16H448c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-34-34C459.4 363.4 480 312.1 480 256c0-10.9-.8-21.5-2.3-32zM256 416c-38.4 0-73.7-13.5-101.3-36.1l32.6-32.6c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H64c-8.8 0-16 7.2-16 16l0 112c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l34-34C148.6 459.4 199.9 480 256 480c10.9 0 21.5-.8 32-2.3V412.8c-10.3 2.1-21 3.2-32 3.2z"/></svg>');
    }, 500);
}
function duplicateArrayItemsWithDistinctValue(arr, times) {
    return Array.from({
        length: times
    }, (_,index)=>{
        return arr.map(item=>({
            ...item,
            value: item.value + index * arr.length
        }));
    }
    ).flat();
}
function initialize_wheel(maybe=false, items=3, click=false) {
    window.maybe = maybe;
    window.result = [];
    var resultInner = [];
    var record = ``;
    var counter = 0;
    var imageOnlyIndex = 0;
    jQuery(pickerWheelRowSelector()).each(function() {
        var $row = $(this);
        var inputText = ($row.find('input[type="text"]').val() || '').trim();
        var inputColor = $row.find('input[type="color"]').val();
        var imageData = ($row.find('.picker-slice-image-data').val() || '').trim();
        var hasImage = imageData.length > 0;
        var slugBase = inputText ? inputText.toLowerCase().replace(/\s/g, '') : 'nombre';
        var uniqueSelector = slugBase + '_' + counter;
        var scorePanelText;
        if (inputText) {
            scorePanelText = inputText;
        } else if (hasImage) {
            imageOnlyIndex += 1;
            scorePanelText = 'Imagen ' + imageOnlyIndex;
        } else {
            scorePanelText = '—';
        }
        record += `
		<div class="record ${uniqueSelector}" >
			<span class="counter">0</span>
			<span class="text">${scorePanelText}</span>
		</div>
		`;
        var displayText = inputText;
        if (displayText.length > 5) {
            displayText = displayText.slice(0, 5) + '...';
        }
        if (!displayText) {
            if (hasImage) {
                displayText = '\u200B';
            } else {
                displayText = '…';
            }
        }
        var alertTitle = scorePanelText;
        var newObj = {
            text: displayText,
            alertTitle: alertTitle,
            value: counter,
            message: displayText,
            discount: "no",
            background: inputColor,
            selector: uniqueSelector,
            image: hasImage ? imageData : '',
            imageLabelOverlay: !!(hasImage && inputText)
        };
        resultInner.push(newObj);
        counter++;
    });
    jQuery(".tries").html(record);
    result = duplicateArrayItemsWithDistinctValue(resultInner, items);
    console.log(result);
    const wheel = $('.wheel-horizontal').superWheel({
        slices: result,
        text: {
            color: '#ffffff',
            offset: 15,
            size: 22,
            arc: true,
            letterSpacing: 0,
            orientation: 'v',
        },
        line: {
            width: 4,
            color: "var(--global-palette6)"
        },
        outer: {
            width: 10,
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
    $(document).off('click.pickerWheelSpin', '.wheel-horizontal-spin-button').on('click.pickerWheelSpin', '.wheel-horizontal-spin-button', function(e) {
        var newRandomNumber = Math.floor(Math.random() * (result.length));
        $('.wheel-horizontal').superWheel('start', newRandomNumber);
        $(this).prop('disabled', true);
        console.log(newRandomNumber)
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
    setPickerItemsButtonActive(items);
    initialize_wheel(window.maybe, items);
}

var PICKER_EXTRA_COLORS = ['#023047', '#51e3c2', '#125869', '#c8003a', '#21a19d', '#2d3748'];

function pickerNextColor(index) {
    return PICKER_EXTRA_COLORS[index % PICKER_EXTRA_COLORS.length];
}

var pickerDraggedRowEl = null;

function pickerInitRowDragHandles() {
    jQuery('.custz_wheel .dragable_btn').attr('draggable', true);
}

function pickerBindRowDragOnce() {
    var $doc = jQuery(document);
    if ($doc.data('pickerRowDragBound')) {
        return;
    }
    $doc.data('pickerRowDragBound', true);
    $doc.on('dragstart', '.custz_wheel .dragable_btn', function(e) {
        var ev = e.originalEvent;
        pickerDraggedRowEl = jQuery(this).closest('.picker-name-row').get(0);
        if (!pickerDraggedRowEl) {
            return;
        }
        try {
            if (ev.dataTransfer) {
                ev.dataTransfer.setData('text/plain', 'picker-row');
                ev.dataTransfer.effectAllowed = 'move';
            }
        } catch (err) {}
        jQuery(pickerDraggedRowEl).addClass('picker-row-dragging');
    });
    $doc.on('dragend', '.custz_wheel .dragable_btn', function() {
        jQuery('.custz_wheel .picker-name-row').removeClass('picker-row-dragging');
        pickerDraggedRowEl = null;
    });
    $doc.on('dragenter dragover', '.custz_wheel .picker-name-row', function(e) {
        if (!pickerDraggedRowEl) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        try {
            if (e.originalEvent.dataTransfer) {
                e.originalEvent.dataTransfer.dropEffect = 'move';
            }
        } catch (err) {}
    });
    $doc.on('drop', '.custz_wheel .picker-name-row', function(e) {
        if (!pickerDraggedRowEl || pickerDraggedRowEl === this) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        var $dragged = jQuery(pickerDraggedRowEl);
        var $here = jQuery(this);
        var rect = this.getBoundingClientRect();
        var before = (e.originalEvent.clientY - rect.top) < rect.height / 2;
        if (before) {
            $dragged.insertBefore($here);
        } else {
            $dragged.insertAfter($here);
        }
        pickerInitRowDragHandles();
        initialize_wheel(false, window.pickerWheelItemsCount, true);
    });
}

jQuery(document).ready(function($) {
    pickerBindRowDragOnce();
    setPickerItemsButtonActive(window.pickerWheelItemsCount);
    initialize_wheel(false, window.pickerWheelItemsCount);
    pickerInitRowDragHandles();

    $(document).on('click', '.no_of_items .items button[data-wheel-items]', function() {
        var n = parseInt($(this).data('wheel-items'), 10);
        if (!isNaN(n)) {
            initialize_wheel_items(n);
        }
    });

    $('.custz_wheel').on('click', '.clone', function() {
        var $anchor = $('.custz_wheel .picker-add-row-wrap');
        var $src = $(this).closest('.picker-name-row');
        var $clonedRow = $src.clone();
        if ($anchor.length) {
            $clonedRow.insertBefore($anchor);
        } else {
            $('.custz_wheel').append($clonedRow);
        }
        initialize_wheel(false, window.pickerWheelItemsCount, true);
        pickerInitRowDragHandles();
    });

    $('.custz_wheel').on('click', '.picker-add-name', function(e) {
        e.preventDefault();
        var $rows = $(pickerWheelRowSelector());
        var $anchor = $('.custz_wheel .picker-add-row-wrap');
        var $base = $rows.length ? $rows.last() : $();
        var $newRow;
        if ($base.length) {
            $newRow = $base.clone();
            $newRow.find('input[type="text"]').val('');
            $newRow.find('input[type="color"]').val(pickerNextColor($rows.length));
            $newRow.find('.picker-slice-image-data').val('');
            $newRow.find('.picker-slice-image-file').val('');
            $newRow.removeClass('picker-has-image');
        } else {
            return;
        }
        if ($anchor.length) {
            $newRow.insertBefore($anchor);
        } else {
            $('.custz_wheel').append($newRow);
        }
        initialize_wheel(false, window.pickerWheelItemsCount, true);
        pickerInitRowDragHandles();
    });

    $('.custz_wheel').on('change', '.picker-name-row input[type="text"], .picker-name-row input[type="color"]', function() {
        initialize_wheel(false, window.pickerWheelItemsCount, true);
    });

    $('.custz_wheel').on('change', '.picker-slice-image-file', function() {
        var file = this.files && this.files[0];
        var $row = $(this).closest('.picker-name-row');
        if (!file || !/^image\//.test(file.type)) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = e.target.result;
            $row.find('.picker-slice-image-data').val(data);
            $row.addClass('picker-has-image');
            initialize_wheel(false, window.pickerWheelItemsCount, true);
        };
        reader.readAsDataURL(file);
    });

    $('.custz_wheel').on('click', '.delete', function() {
        var $row = $(this).closest('.picker-name-row');
        if ($(pickerWheelRowSelector()).length <= 1) {
            return;
        }
        $row.remove();
        initialize_wheel(false, window.pickerWheelItemsCount, true);
        pickerInitRowDragHandles();
    });
});
