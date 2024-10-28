import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C4E0BAQFPimXwD04hOA/company-logo_100_100/company-logo_100_100/0/1631350761367?e=1738195200&v=beta&t=42g0480VlI-HGIXr-V8ieJuxHwElNDdJYggoOFnBjyg"
								alt="teo"
								className="work-image"
							/>
							<div className="work-title">Teo International</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">
								(Sep)2023 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C4E0BAQFPimXwD04hOA/company-logo_100_100/company-logo_100_100/0/1631350761367?e=1738195200&v=beta&t=42g0480VlI-HGIXr-V8ieJuxHwElNDdJYggoOFnBjyg"
								alt="teo"
								className="work-image"
							/>
							<div className="work-title">Teo International</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								(Oct)2022 - (Sep)2023
							</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C4D0BAQHQUzKG981j9A/company-logo_100_100/company-logo_100_100/0/1663218776013/deltacron_business_technologies_logo?e=1738195200&v=beta&t=Hst4ujKbbpxzKAjNnIQFR_CrbXZ7R9YuKtsCPzsdtL4"
								alt="delta"
								className="work-image"
							/>
							<div className="work-title">Deltacron</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								(Feb)2022 - (Oct)2022
							</div>
						</div>
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C4D0BAQGkBEkm6_QDqA/company-logo_100_100/company-logo_100_100/0/1650392897832/ssconsultant123_logo?e=1738195200&v=beta&t=w9bqbY3596ETnkw9gBw6WDNm78HCTUWpY7rH4hsXtDg"
								alt="safe"
								className="work-image"
							/>
							<div className="work-title">Safe solution</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								(Aug)2021 - (Feb)2022
							</div>
						</div>
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C4D0BAQEobaWqnXBcHQ/company-logo_100_100/company-logo_100_100/0/1630468919204/graystork_pvt_ltd_logo?e=1738195200&v=beta&t=8MozRx0AUD7LcI30773phuUb6cj4nQiTz3r_Ix74DKE"
								alt="gray"
								className="work-image"
							/>
							<div className="work-title">Gray stork</div>
							<div className="work-subtitle">
								Internee Software Engineer
							</div>
							<div className="work-duration">
								(Mar)2021 - (Jul)2021
							</div>
						</div>
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/D4D0BAQFHKm5uvluXvw/company-logo_100_100/company-logo_100_100/0/1694444604389/asimplify_logo?e=1738195200&v=beta&t=ZdQDnC-Gnrl6PhzE968VKVXbqNdt7YmHXfnONh18I1c"
								alt="asimplify"
								className="work-image"
							/>
							<div className="work-title">Asimpilfy</div>
							<div className="work-subtitle">
								Internship trainee
							</div>
							<div className="work-duration">
								(Aug)2020 - (Oct)2020
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
