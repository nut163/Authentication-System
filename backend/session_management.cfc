```coldfusion
<cfcomponent>

    <!--- Function to start a new session --->
    <cffunction name="startSession" access="public" returntype="void">
        <cfset session.start()>
    </cffunction>

    <!--- Function to end a session --->
    <cffunction name="endSession" access="public" returntype="void">
        <cfset session.invalidate()>
    </cffunction>

    <!--- Function to check if a session exists --->
    <cffunction name="isSessionActive" access="public" returntype="boolean">
        <cfreturn isDefined("session")>
    </cffunction>

    <!--- Function to set session variables --->
    <cffunction name="setSessionVariable" access="public" returntype="void">
        <cfargument name="varName" type="string" required="yes">
        <cfargument name="varValue" type="any" required="yes">
        <cfset session[varName] = varValue>
    </cffunction>

    <!--- Function to get session variables --->
    <cffunction name="getSessionVariable" access="public" returntype="any">
        <cfargument name="varName" type="string" required="yes">
        <cfif isDefined("session[varName]")>
            <cfreturn session[varName]>
        <cfelse>
            <cfthrow message="Session variable #varName# does not exist.">
        </cfif>
    </cffunction>

</cfcomponent>
```