<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:h="http://www.w3.org/1999/xhtml"
                xmlns:yah="http://search.yahoo.com/mrss/">
    <xsl:output method="text"/>

    <xsl:template match="/">
        {
	        'Items': [
		        <xsl:for-each select="//item">
	                {
		                'title': '<xsl:value-of select="title"/>',
		                'guid': '<xsl:value-of select="guid"/>',
		                'link': '<xsl:value-of select="link"/>',
		                'description': '<xsl:value-of select="description"/>',
		                'pubDate': '<xsl:value-of select="pubDate"/>',
                    'thumbnail': '<xsl:value-of select="yah:image/@url"/>',
                    'img': '<xsl:value-of select="yah:content/@url"/>'
	                },
		        </xsl:for-each>
	        ]
        }
    </xsl:template>

</xsl:stylesheet>
