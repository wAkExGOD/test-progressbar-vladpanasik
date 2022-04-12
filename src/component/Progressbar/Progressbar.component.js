import { PureComponent } from "react";

import "./Progressbar.style";

export class Progressbar extends PureComponent {
  state = {
    progressPercent: "0%",
  };

  updatePercent(activeNum, itemsLength) {
    const progressPercent = `${(activeNum / (itemsLength - 1)) * 100}%`;
    this.setState({ progressPercent });
  }

  ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  componentDidUpdate() {
    const { items, active } = this.props;
    const activeNum = items.indexOf(active);
    this.updatePercent(activeNum, items.length);
  }

  render() {
    const { items, active } = this.props;
    const activeNum = items.indexOf(active);
    const { ucFirst } = this;
    const { progressPercent } = this.state;

    return (
      <div className="Progressbar">
        <div className="Progressbar_container">
          <div
            className="Progressbar_progress"
            style={{ width: `${progressPercent}` }}
          ></div>
          {items.map((elem, idx) => (
            <div className="Progressbar_elem">
              <div
                className={`Progressbar_circle ${
                  activeNum >= idx ? "active" : ""
                }`}
              >
                <div className="num_status">
                  {activeNum >= idx + 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                    >
                      <path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z" />
                    </svg>
                  ) : (
                    <span>{idx + 1}</span>
                  )}
                </div>
                <h3 className="text_status">{ucFirst(elem)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Progressbar;