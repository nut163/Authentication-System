```coldfusion
<cfcomponent>

    <cffunction name="sendEmail" access="public" returntype="boolean">
        <cfargument name="email" type="string" required="yes">
        <cfargument name="subject" type="string" required="yes">
        <cfargument name="body" type="string" required="yes">
        
        <cfset var mailService = createObject("component", "MailService")>
        
        <cftry>
            <cfmail to="#arguments.email#" from="noreply@yourdomain.com" subject="#arguments.subject#" type="html">
                #arguments.body#
            </cfmail>
            
            <cfreturn true>
            
            <cfcatch>
                <cflog file="mail" text="Failed to send email to #arguments.email#. Error: #cfcatch.message#">
                <cfreturn false>
            </cfcatch>
        </cftry>
    </cffunction>

    <cffunction name="sendOTP" access="public" returntype="boolean">
        <cfargument name="email" type="string" required="yes">
        <cfargument name="otp" type="numeric" required="yes">
        
        <cfset var subject = "Your One Time Password">
        <cfset var body = "Your OTP is: #arguments.otp#. Please do not share this OTP with anyone.">
        
        <cfreturn sendEmail(arguments.email, subject, body)>
    </cffunction>

    <cffunction name="sendMagicLink" access="public" returntype="boolean">
        <cfargument name="email" type="string" required="yes">
        <cfargument name="magicLink" type="string" required="yes">
        
        <cfset var subject = "Your Magic Link">
        <cfset var body = "Click on the following link to login: <a href='#arguments.magicLink#'>#arguments.magicLink#</a>. Please do not share this link with anyone.">
        
        <cfreturn sendEmail(arguments.email, subject, body)>
    </cffunction>

</cfcomponent>
```