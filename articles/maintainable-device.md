# maintainable-device-scorecard

This list is intended to help you determine how well your team will be able to support, maintain, and service a device in an ever changing landscape of requirements and integrations. 

our situation is that of a small group (fewer than 30) with thousands of devices spread out in remote areas that run as long as possible before replacement (sometimes decades).  Security and IT standards change rapidly and perpetually in our parent organization and many required standards didn't even exist when our earlier devices were installed. We can't visit these devices to perform updates until a failure occurs So upgrades must be performed extremely carefully over the net. We are planning a long awaited technology refresh for our baseline remote system configuration and this list is the result of my meditatinos on what our criteria should be. 

Reading through these yourself may help you realize unanticipated scenarios down the road while trying to troubleshoot issues, deal with new security compliance requirements, or integrate with technology you aren't aware of yet. Personally I've started to ask these questions for nearly every device I buy and I've gotten far more satisfaction and value out of the devices that score well in this scorecard. you should rank each of these on a 1-10 scale depending on how well it meets the question. 

Submit PRs if you want to suggest more. 

if there is interest I might develop this into some kind of a wiki (which is why there is some source code in this repo) 

Ultimately it's my hope that if enough people considered these questions when making a technology purchase more manufacturers would care and we could make the world a better place through culture and demand rather than heavy handed and ill conceived regulation. 

## questions:

Is there an open or available API with documentation for end user use?

Can the device be configured with human readable text files that can be deployed in an automated way?

Can the device be configured over SSH?

Can the device be configured over a web interface hosted directly on the device?

Can configurations be deployed to a fleet of devices en-masse?

Can configurations be deployed to a device through a highly automated and simple provisioning process?

Can the device run self tests and roll back configurations that fail?

If the device supports authentication, can it be configured to use a domain authenticator/ oauth?

Does this device produce data for its primary function in a standard format (JSON, CSV, XML etc.) or provide documentation for parsing their custom format? (full credit for human readable standard formats)

Is the operating system and/or firmware and/or software it runs open source? 

Are there any proprietary software or drivers that are necessary for regular operation?

If so what is the long term support commitment for updating the proprietary software for new operating systems and security patches?

Can the firmware/software be obtained under another license/agreement on condition of NDA or similar legal agreement?

Can the firmware and/or software be deployed and updated by the user?

Does the device send data to the manufacturer or third parties?

Does this device depend on remote/cloud infrastructure for operation?

Does this device depend on cloud infrastructure the end user cannot control, replace, or run on their own?

Does this device require you to install a mobile app to configure or manage it?

Can the device be repaired or upgraded with modular electronic components?

Does this device run a standard operating system that can be patched, upgraded, and modified by the end user? (think security patching or configuration. Debian or Ubuntu would get top marks for this.)

Does the device use a Open Source hardware specification (think RISC V)? 

What is the typical support lifetime by the manufacturer for software updates?

Does the manufacturer publish the MTBF (mean time before failure)?

Does the device have a secure supply chain?

Are cad files or detailed hardware specs available to support modifications and repair?

Does documentation exist for each of the relevant items above?
