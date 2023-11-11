$(document).ready(function () {
	let selectedCount = 0
	$('.myCheckbox').change(function () {
		if ($(this).prop('checked')) {
			selectedCount++
		} else {
			selectedCount--
		}
		if (selectedCount >= 3) {
			$('.myCheckbox:not(:checked)').attr('disabled', true)
		} else {
			$('.myCheckbox').attr('disabled', false)
		}
	})
})
