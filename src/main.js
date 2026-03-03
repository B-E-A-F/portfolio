import './style.css'

const selectableRows = document.querySelectorAll('tr.selectable-row');

if (selectableRows.length > 0) {
	selectableRows.forEach((row) => {
		row.addEventListener('click', () => {
			selectableRows.forEach((candidateRow) => {
				candidateRow.classList.remove('selectable-row-selected');
				candidateRow.classList.add('selectable-row');
			});

			row.classList.remove('selectable-row');
			row.classList.add('selectable-row-selected');
		});
	});
}

const draggableWindow = document.querySelector('.outer.mw');
const dragHandle = draggableWindow?.querySelector('.header');

if (draggableWindow && dragHandle) {
	let isDragging = false;
	let pointerId = null;
	let offsetX = 0;
	let offsetY = 0;

	const setInitialFixedPosition = () => {
		if (draggableWindow.style.position === 'fixed') return;

		const rect = draggableWindow.getBoundingClientRect();
		draggableWindow.style.position = 'fixed';
		draggableWindow.style.left = `${rect.left}px`;
		draggableWindow.style.top = `${rect.top}px`;
		draggableWindow.style.margin = '0';
		draggableWindow.style.zIndex = '1000';
	};

	const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
	const isMobileDragDisabled = () => {
		return window.matchMedia('(pointer: coarse)').matches;
	};

	const resetWindowPosition = () => {
		isDragging = false;
		dragHandle.classList.remove('dragging');

		if (pointerId !== null && dragHandle.hasPointerCapture(pointerId)) {
			dragHandle.releasePointerCapture(pointerId);
		}

		pointerId = null;
		draggableWindow.style.position = '';
		draggableWindow.style.left = '';
		draggableWindow.style.top = '';
		draggableWindow.style.margin = '';
		draggableWindow.style.zIndex = '';
	};

	dragHandle.addEventListener('pointerdown', (event) => {
		if (isMobileDragDisabled()) return;
		if (event.button !== 0) return;

		if (event.target.closest('button, input, label, a, textarea, select')) {
			return;
		}

		setInitialFixedPosition();

		const rect = draggableWindow.getBoundingClientRect();
		offsetX = event.clientX - rect.left;
		offsetY = event.clientY - rect.top;

		isDragging = true;
		pointerId = event.pointerId;
		dragHandle.classList.add('dragging');
		dragHandle.setPointerCapture(pointerId);
		event.preventDefault();
	});

	dragHandle.addEventListener('pointermove', (event) => {
		if (!isDragging || event.pointerId !== pointerId) return;

		const maxLeft = window.innerWidth - draggableWindow.offsetWidth;
		const maxTop = window.innerHeight - draggableWindow.offsetHeight;

		const nextLeft = clamp(event.clientX - offsetX, 0, Math.max(0, maxLeft));
		const nextTop = clamp(event.clientY - offsetY, 0, Math.max(0, maxTop));

		draggableWindow.style.left = `${nextLeft}px`;
		draggableWindow.style.top = `${nextTop}px`;
	});

	const stopDragging = (event) => {
		if (!isDragging || event.pointerId !== pointerId) return;

		isDragging = false;
		dragHandle.classList.remove('dragging');

		if (dragHandle.hasPointerCapture(pointerId)) {
			dragHandle.releasePointerCapture(pointerId);
		}

		pointerId = null;
	};

	dragHandle.addEventListener('pointerup', stopDragging);
	dragHandle.addEventListener('pointercancel', stopDragging);
	window.addEventListener('resize', resetWindowPosition);
}