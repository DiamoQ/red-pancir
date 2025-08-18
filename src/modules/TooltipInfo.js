class TooltipController {
    constructor() {
        this.selector = '[data-js-tooltip]';
        this.tooltips = document.querySelectorAll(this.selector);
        this.activeTooltip = null;
        this.init();
    }

    init() {
        this.tooltips.forEach((tooltipEl) => {
            tooltipEl.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                this.toggle(tooltipEl);
            });

            tooltipEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.stopPropagation();
                    this.toggle(tooltipEl);
                }
            });
        });

        document.addEventListener('mousedown', (e) => {
            if (this.activeTooltip && !this.activeTooltip.contains(e.target)) {
                this.closeAll();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAll();
            }
        });
    }

    toggle(tooltipEl) {
        const isOpen = tooltipEl.dataset.state === 'open';

        this.closeAll();

        if (!isOpen) {
            tooltipEl.dataset.state = 'open';
            this.activeTooltip = tooltipEl;
        }
    }

    closeAll() {
        this.tooltips.forEach((tooltip) => {
            tooltip.dataset.state = 'closed';
        });
        this.activeTooltip = null;
    }
}

export default TooltipController;
