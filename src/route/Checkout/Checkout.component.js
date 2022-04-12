import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'SourceComponent/ContentWrapper/ContentWrapper.component';
import { default as Progressbar } from '../../component/Progressbar';

class Checkout extends SourceCheckout {
    renderStep() {
        const { checkoutStep } = this.props;
        const { render, title } = this.stepMap[checkoutStep];
        
        if (render) {
            return render();
        }

        return null;
    }

    renderProgressbar() {
        const { step } = this.props.match.params;
        const items = Object.keys(this.stepMap)
            .map(name => 
                this.stepMap[name].url.slice(1)
            );

        return (
            <Progressbar
                items={items}
                active={step}
            />
        );
    }

    render() {
        return (
            <main block="Checkout">
                { this.renderProgressbar() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
};

export default Checkout;